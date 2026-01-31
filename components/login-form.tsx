"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { useAuth } from "@/contexts/auth-context"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await login(email, password)
      router.push("/")
    } catch (err) {
      console.error("Login failed:", err)
      setError(err instanceof Error ? err.message : "Invalid email or password. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div 
      className="flex flex-col items-center space-y-6 mx-auto"
      style={{
        width: "360px",
        fontFamily: "var(--font-montserrat), sans-serif"
      }}
    >
      {/* Logo */}
      <div className="flex justify-center">
        <div className="w-[50px] h-[56px] flex items-center justify-center">
          <Image src="./logo.png" alt="Hano Logo" width={32} height={32} className="w-[50px] h-[56px]" />
        </div>
      </div>

      {/* Header */}
      <div className="text-center space-y-2 w-full">
        <h2 
          className="text-white font-medium"
          style={{
            width: "360px",
            height: "29px",
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "29px"
          }}
        >
          Log in to your account
        </h2>
        <p 
          className="text-brand-dark-400"
          style={{
            width: "360px",
            height: "17px",
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "17px"
          }}
        >
          Welcome back! Please enter your details.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 w-full" style={{ width: "360px" }}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-white placeholder:text-brand-dark-400 focus:outline-none rounded-lg border border-brand-dark-600"
              style={{
                width: "100%",
                height: "48px",
                padding: "10px 14px",
                backgroundColor: "#1E1E1E99",
                fontFamily: "var(--font-montserrat), sans-serif"
              }}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-white placeholder:text-brand-dark-400 focus:outline-none rounded-lg border border-brand-dark-600"
              style={{
                width: "100%",
                height: "48px",
                padding: "10px 14px",
                backgroundColor: "#1E1E1E99",
                fontFamily: "var(--font-montserrat), sans-serif"
              }}
              required
            />
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-900/20 border border-red-900/50 rounded-lg p-3 w-full" style={{ width: "360px" }}>
            <p className="text-red-400 text-sm" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{error}</p>
          </div>
        )}

        <div className="flex items-center justify-between w-full" style={{ width: "360px" }}>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              className="border-brand-dark-600 data-[state=checked]:bg-tertiary-600 data-[state=checked]:border-tertiary-600"
            />
            <Label 
              htmlFor="remember" 
              className="text-sm text-brand-dark-400"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Remember for 30 days
            </Label>
          </div>
          <button 
            type="button" 
            className="text-sm transition-colors" 
            style={{ 
              color: "#D63D34",
              fontFamily: "var(--font-montserrat), sans-serif"
            }}
          >
            Forgot password
          </button>
        </div>

        <div className="space-y-4">
          <Button 
            type="submit" 
            className="w-full bg-white text-black hover:bg-brand-dark-100 transition-colors h-12"
            style={{ 
              fontFamily: "var(--font-montserrat), sans-serif"
            }}
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </div>
      </form>

      {/* Sign up link */}
      <div className="text-center w-full" style={{ width: "360px" }}>
        <span 
          className="text-brand-dark-400 text-sm"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Don't have an account?{" "}
        </span>
        <button 
          className="text-sm font-medium transition-colors" 
          style={{ 
            color: "#D63D34",
            fontFamily: "var(--font-montserrat), sans-serif"
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  )
}
