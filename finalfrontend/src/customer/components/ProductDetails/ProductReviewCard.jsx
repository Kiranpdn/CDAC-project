import React from "react"
import { Avatar } from "@mui/material"
import { Rating, Box, Typography, Grid } from "@mui/material"
// import Grid from "@mui/material"


function ProductReviewCard() {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className="text-white" sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}>R</Avatar>
                    </Box>

                </Grid>
                <Grid item xs={9}>
                    <div className="space-y-2">
                        <div>
                            <p>Raam</p>
                            <p>June 30,2023</p>
                        </div>

                    </div>


                    <Rating value={4.5} name='half-rating'/>
                    <p>Good product!!</p>

                </Grid>
            </Grid>
        </div>
    )
}
export default ProductReviewCard;
