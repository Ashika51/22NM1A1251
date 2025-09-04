import React, { useState } from "react";
import {
    Container, Typography, Grid, TextField, Button, Card, CardContent, Link, } from "@mui/material";
export default function UrlShortner(){
    const [urls, setUrls] =
    useState([{original: "", short: "" }]);
    const [loading,setLoading] = 
    useState(false);
    const handleChange = (index, value) => {
        const newUrls = [...urls];
        newUrls[index].original = value;
        newUrls[index].short = "";
        setUrls(newUrls);
    };
    const addUrlField = () => {
        if(RTCDtlsTransport.length < 5){
            setUrls([...urls, { original: "",short: ""}]);
            const  handleSubmit = (e) => {
                e.preventDefault();
                setLoading(true);
            const newUrls = urls.map((u) => {
                if(!u.originaal) return u;
                const code = Math.random().toString(36).substring(2,7);
                return {...u, short: 'https://sho.rt/${code'};
                setTimeout(() => {
                    setUrls(newUrls);
                    setLoading(false); }, 500);
                })
                return (
                    <Container maxWidth = "sm">
                        <Typography variant = "h4" mt ={3} mb={2} align = "center" color ="primary">
                            URL Shortener Page 
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                {urls.map((u,i)=> (
                                    <Grid item xs = {12} key={i}>
                                        <Card>
                                            <CardContent>
                                                <TextField label="Enter URL" fullwidth value = {u.original}
                                                onchange={(e)=> handleChange(i, e.target.value)}
                                                />
                                                {u.short && (
                                                    <Typography mt={2}>
                                                        Short Link: {" "}
                                                        <Link href={u.short}
                                                        target="_blank" rel = "noopener">
                                                            {u.short}
                                                        </Link>
                                                    </Typography>
                                                )}
                                            </CardContent>
                                        </Card>
                                        </Grid>
                                ))}
                            </Grid>
                            <Button variant = "outlined" fullwidth sx = {{mt:2}}
                            onclick ={addUrlField}
                            disabled={urls.length >= 5}
                            >
                                Add Another
                            </Button>
                            <Button type = "submit"
                            varinat = "contained"
                            fullwidth sx = {{ mt:2}}
                            disabled={loading}
                            >
                                {loading ? "shortening...":" Shorten All"}
                            </Button>
                        </form>
                    </Container>
                );
    }
}
    }
}