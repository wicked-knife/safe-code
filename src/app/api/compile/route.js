import {readFileSync} from 'node:fs'
import {resolve} from 'node:path'
import { NextResponse } from 'next/server'

export async function GET(request) {
  return NextResponse.json({ hello: 'world', path: request.nextUrl.pathname })
}

export async function POST(request) {
  const body = await request.json()
  const { code } = body
  const trimmedCode = code?.trim()
  if (!trimmedCode) {
    return NextResponse.json({ error: 'code is required' }, { status: 400 })
  }

  const p = resolve(process.cwd(), 'src/app/api/compile/route.js')
  const fileContent = readFileSync(p, 'utf-8')
  return NextResponse.json({ code: trimmedCode, fileContent })
}