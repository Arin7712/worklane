"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const OnboardingForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Onboarding Form</CardTitle>
        <CardDescription>Onboarding form description</CardDescription>
      </CardHeader>
      <CardContent>
        <form></form>
      </CardContent>
    </Card>
  )
}

export default OnboardingForm
