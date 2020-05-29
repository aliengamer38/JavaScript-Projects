import React from "react"
import Link from "next/link"

const errorPage = () => {
    return (
        <div>
            <h1>Error! Something is wrong.</h1>
            <p>Try Again <Link href="/auth"><a>Auth</a></Link></p>            
        </div>
    )
}
export default errorPage;