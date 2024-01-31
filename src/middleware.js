import { NextResponse } from "next/server";

export default function Middleware(request){
    return NextResponse.redirect(new URL("/login",request.url))
}
export const config={
    matcher: ["/admin:path*",]
}