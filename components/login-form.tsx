"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  // Redirect if already authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true" || 
                           sessionStorage.getItem("isAuthenticated") === "true";
    
    if (isAuthenticated) {
      router.push("/");
    }
  }, [router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    // Validate credentials
    if (email.trim() === "admin" && password === "admin123") {
      // Store login state in localStorage if remember me is checked
      if (rememberMe) {
        localStorage.setItem("isAuthenticated", "true")
      } else {
        sessionStorage.setItem("isAuthenticated", "true")
      }
      router.push("/") // ✅ redirect to homepage
    } else {
      setError("Invalid credentials. Please try logging in again or check your password.")
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
      <form onSubmit={handleSubmit} className="space-y-4 w-full" style={{ width: "360px" }}>
        <div className="space-y-2 w-full">
          <Label 
            htmlFor="email" 
            className="text-white block"
            style={{
              width: "41px",
              height: "17px",
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "17px"
            }}
          >
            Email
          </Label>
          <Input
            id="email"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError("")
            }}
            className="text-white placeholder:text-brand-dark-400 focus:outline-none rounded-lg border border-brand-dark-600"
            style={{
              width: "360px",
              height: "55px",
              padding: "10px 14px",
              backgroundColor: "#1E1E1E99",
              fontFamily: "var(--font-montserrat), sans-serif"
            }}
            required
          />
        </div>

        <div className="space-y-2 w-full">
          <Label 
            htmlFor="password" 
            className="text-white block"
            style={{
              width: "41px",
              height: "17px",
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "17px"
            }}
          >
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError("")
            }}
            className="text-white placeholder:text-brand-dark-400 focus:outline-none rounded-lg border border-brand-dark-600"
            style={{
              width: "360px",
              height: "55px",
              padding: "10px 14px",
              backgroundColor: "#1E1E1E99",
              fontFamily: "var(--font-montserrat), sans-serif"
            }}
            required
          />
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

        <Button 
          type="submit" 
          className="w-full bg-white text-black hover:bg-brand-dark-100 transition-colors"
          style={{ 
            width: "360px",
            fontFamily: "var(--font-montserrat), sans-serif"
          }}
        >
          Sign in
        </Button>
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
