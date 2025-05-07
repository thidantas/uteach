'use client'

import { FormEvent } from 'react'

import Button from 'components/Button'

import * as S from './styles'

const SubmitProjectForm = () => {
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const email = formData.get('email')
    const message = formData.get('message')

    // TODO: add the integration with the api
    // ## The following line is inserted only to view the inserted content
    console.log('Project Submitted:', {
      email,
      message
    })
  }

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleOnSubmit}>
        <S.Label>
          Email
          <S.Input name="email" placeholder="Enter your email" required />
        </S.Label>

        <S.Label>
          Message
          <S.TextArea
            name="message"
            placeholder="What are you say ?"
            required
          />
        </S.Label>

        <Button type="submit" color="secondary" bold>
          Request Demo
        </Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default SubmitProjectForm
