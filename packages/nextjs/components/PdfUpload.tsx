'use client';
import React, { useState } from 'react'
import { Form, Button, ProgressBar, Container, Badge } from 'react-bootstrap'
import { create as ipfsHttpClient } from 'ipfs-http-client'
//import IPFS from "ipfs";
const projectId = "2UIZMWmPzQ6AiKfmzePxDfGM0U8";
const projectSecretKey = "78f5e328c7bb8aed7ab4ffface404949";
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);
const ipfs = ipfsHttpClient({
    url: "https://ipfs.infura.io:5001/api/v0",
    headers: {
     authorization,
    },
  });
//const ipfs = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
//const ipfsnode= await IPFS.create();
export const PdfUpload = ({ setUrl, setHash }) => {
    const [pdf, setPdf] = useState({})
    const [pdfPreview, setPdfPreview] = useState('')
    const [loading, setLoading] = useState(false)
    const [uploaded, setUploaded] = useState(false)

    const createPreview = (e) => {
        if (e.target.value !== '') {
            setPdf(e.target.files[0])
            const src = URL.createObjectURL(e.target.files[0])
            setPdfPreview(src)
        } else {
            setPdfPreview('')
        }
    }

    const uploadFile = async (e) => {
        setLoading(true)
        e.preventDefault()

        try {
            const added = await ipfs.add(pdf)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setPdfPreview(url)
            setUrl(url)
            console.log(added, 'added')
            setHash(added.path)
            setUploaded(true)
        } catch (err) {
            console.log('Error uploading the file : ', err)
        }
        setLoading(false)
    }

    const previewAndUploadButton = () => {
        if (pdfPreview !== '') {
            if (!loading) {
                return (
                    <div>
                        {uploaded ? (
                            <h5>
                                ✅{' '}
                                <a
                                    href={pdfPreview}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    PDF
                                </a>{' '}
                                Uploaded Successfully ✅
                            </h5>
                        ) : (
                            <div>
                                <Button type='submit' className='mb-3'>
                                    Upload PDF
                                </Button>
                                <br />
                                <h5>
                                    {pdf.name} <Badge pill>{pdf.size} kb</Badge>
                                </h5>

                                <embed
                                    width='75%'
                                    height='400px'
                                    className='mb-3'
                                    src={pdfPreview}
                                ></embed>
                            </div>
                        )}
                    </div>
                )
            } else {
                return (
                    <Container>
                        <h4>Uploading PDF</h4>
                        <ProgressBar animated now={100} />
                        <h4>Please Wait ...</h4>
                    </Container>
                )
            }
        }
    }

    return (
        <div>
            <Form onSubmit={uploadFile}>
                <Form.Control
                    required
                    type='file'
                    accept='application/pdf'
                    onChange={(e) => createPreview(e)}
                    className='mb-3'
                />

                {previewAndUploadButton()}
            </Form>
        </div>
    )
}
