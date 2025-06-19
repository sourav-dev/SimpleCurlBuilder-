import { useState } from 'react'
import {
  Container,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Paper,
  Switch,
  FormControlLabel,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

interface Header {
  key: string
  value: string
}

function App() {
  const [method, setMethod] = useState('GET')
  const [url, setUrl] = useState('')
  const [body, setBody] = useState('')
  const [headers, setHeaders] = useState<Header[]>([{ key: '', value: '' }])
  const [isJson, setIsJson] = useState(true)
  const [insecure, setInsecure] = useState(false)
  const [verbose, setVerbose] = useState(false)
  const [showCopyAlert, setShowCopyAlert] = useState(false)

  const addHeader = () => {
    setHeaders([...headers, { key: '', value: '' }])
  }

  const updateHeader = (index: number, field: 'key' | 'value', value: string) => {
    const newHeaders = [...headers]
    newHeaders[index][field] = value
    setHeaders(newHeaders)
  }

  const removeHeader = (index: number) => {
    setHeaders(headers.filter((_, i) => i !== index))
  }

  const generateCurlCommand = () => {
    let command = 'curl'
    
    if (verbose) {
      command += ' -v'
    }
    
    if (insecure) {
      command += ' -k'
    }

    command += ` -X ${method}`

    // Add headers
    headers.forEach(header => {
      if (header.key && header.value) {
        command += ` -H "${header.key}: ${header.value}"`
      }
    })

    // Add content type if JSON
    if (isJson && body) {
      command += ' -H "Content-Type: application/json"'
    }

    // Add body if present
    if (body) {
      command += ` -d '${body}'`
    }

    // Add URL
    command += ` "${url}"`

    return command
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCurlCommand())
    setShowCopyAlert(true)
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
        cURL Command Builder
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 3, background: 'transparent' }} className="glass-effect">
        <Box sx={{ mb: 3 }}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>HTTP Method</InputLabel>
            <Select
              value={method}
              label="HTTP Method"
              onChange={(e) => setMethod(e.target.value)}
              className="glass-input glass-select"
            >
              <MenuItem value="GET">GET</MenuItem>
              <MenuItem value="POST">POST</MenuItem>
              <MenuItem value="PUT">PUT</MenuItem>
              <MenuItem value="DELETE">DELETE</MenuItem>
              <MenuItem value="PATCH">PATCH</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            sx={{ mb: 2, input: { color: 'white' }, label: { color: 'rgba(255,255,255,0.8)' } }}
            className="glass-input"
          />

          <TextField
            fullWidth
            label="Request Body"
            multiline
            rows={4}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            sx={{ mb: 2, input: { color: 'white' }, label: { color: 'rgba(255,255,255,0.8)' } }}
            className="glass-input"
          />

          <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
            Headers
          </Typography>
          {headers.map((header, index) => (
            <Box key={index} sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <TextField
                label="Key"
                value={header.key}
                onChange={(e) => updateHeader(index, 'key', e.target.value)}
                sx={{ flex: 1, input: { color: 'white' }, label: { color: 'rgba(255,255,255,0.8)' } }}
                className="glass-input"
              />
              <TextField
                label="Value"
                value={header.value}
                onChange={(e) => updateHeader(index, 'value', e.target.value)}
                sx={{ flex: 1, input: { color: 'white' }, label: { color: 'rgba(255,255,255,0.8)' } }}
                className="glass-input"
              />
              <Button
                variant="outlined"
                color="error"
                onClick={() => removeHeader(index)}
                sx={{ minWidth: '100px' }}
                className="glass-button"
              >
                Remove
              </Button>
            </Box>
          ))}
          <Button 
            variant="outlined" 
            onClick={addHeader} 
            sx={{ mb: 2 }}
            className="glass-button"
          >
            Add Header
          </Button>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={isJson}
                  onChange={(e) => setIsJson(e.target.checked)}
                  className="glass-switch"
                />
              }
              label="JSON Content Type"
              sx={{ color: 'white' }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={insecure}
                  onChange={(e) => setInsecure(e.target.checked)}
                  className="glass-switch"
                />
              }
              label="Accept Self-Signed Cert"
              sx={{ color: 'white' }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={verbose}
                  onChange={(e) => setVerbose(e.target.checked)}
                  className="glass-switch"
                />
              }
              label="Verbose"
              sx={{ color: 'white' }}
            />
          </Box>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, background: 'transparent' }} className="glass-effect">
        <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
          Generated cURL Command
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          p: 2,
          borderRadius: 1,
          position: 'relative',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}>
          <Typography
            component="pre"
            sx={{
              flex: 1,
              overflowX: 'auto',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
              fontFamily: 'monospace',
              color: 'white',
            }}
          >
            {generateCurlCommand()}
          </Typography>
          <IconButton 
            onClick={copyToClipboard} 
            sx={{ 
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <ContentCopyIcon />
          </IconButton>
        </Box>
      </Paper>

      <Snackbar
        open={showCopyAlert}
        autoHideDuration={3000}
        onClose={() => setShowCopyAlert(false)}
      >
        <Alert 
          severity="success" 
          onClose={() => setShowCopyAlert(false)}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
          }}
        >
          Command copied to clipboard!
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default App
