import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import './App.css'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowIcon } from './components/Icons'
import LanguageSelector from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'

export default function App() {

  const { 
    fromLanguage, 
    toLanguage, 
    fromText, 
    result, 
    interchangeLanguages, 
    setFromLanguage, 
    setToLanguage,
    setFromText,
    setResult 
  } = useStore()

  return (
    <Container fluid>
      <h2>Google Translate</h2>

      <Row>
        <Col xs='auto'>
          <Stack gap={3}>
            <LanguageSelector 
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage} 
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
              autoFocus={true}
              
            />
          </Stack>
        </Col>

        <Col>
          <Button 
            disabled={fromLanguage === AUTO_LANGUAGE} 
            onClick={interchangeLanguages}
          >
            <ArrowIcon />
          </Button>
        </Col>

        <Col xs='auto'>
          <Stack gap={3}>
            <LanguageSelector 
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea 
              type={SectionType.To}
              value={result}
              onChange={setResult}
              autoFocus={false}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}



