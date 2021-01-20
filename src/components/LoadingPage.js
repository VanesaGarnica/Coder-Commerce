import React from 'react'
import {CircularProgress} from '@material-ui/core'

const LoadingPage = () => {
    return (
        <div style={{ marginTop: "40vh", display: "flex", flexGrow: 1, justifyContent: "center", color:"lightgrey" }}>
            <CircularProgress size={50} color="inherit" />
        </div>
    )
}

export { LoadingPage };