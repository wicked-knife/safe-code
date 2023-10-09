import {NextResponse} from 'next/server'

export async function GET(request, response) {
  return NextResponse.json({hello: 'world', path: request.nextUrl.pathname})
}