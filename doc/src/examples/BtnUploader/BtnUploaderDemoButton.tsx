import * as React from 'react'
import {useState} from 'react'
import {BtnUploader} from 'mui-extension'

export const BtnUploaderDemoButton = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [document, setDocument] = useState<any>(null)

  const onUpload = (f: File) => {
    const document = {name: f.name, permalink: 'http://google.fr'}
    setIsLoading(true)
    setTimeout(() => {
      setDocument(document)
      setIsLoading(false)
    }, 1200)
  }

  const onDelete = () => {
    setIsLoading(true)
    setTimeout(() => {
      setDocument(null)
      setIsLoading(false)
    }, 800)
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
      <BtnUploader
        uploading={isLoading}
        document={document}
        onUpload={onUpload}
        onDelete={onDelete}/>

      <BtnUploader
        uploading={isLoading}
        document={document}
        onUpload={onUpload}
        onDelete={onDelete}
        variant="contained"
        color="secondary"
      />
    </div>
  )
}
