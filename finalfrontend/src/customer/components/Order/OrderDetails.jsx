import React from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from "@mui/icons-material/Star";
import { deepPurple } from "@mui/material/colors";
import { useEffect } from "react";
import { Grid , Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import OrderTracker from './OrderTracker';
import AddressCard from "../AddressCard/AddressCard";

const OrderDetails = () => {
    return(
        <div className='px:5 lg:px-20'>
            <div>
            <h1 className='font-bold text-xl py-10'>Delivery Address</h1>
            <AddressCard/>

            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3}/>
            </div>
           <Grid className='space-y-5' container>
            {[1,1,1,1,1].map((item)=> <Grid item container className='shadow-xl rounded-md' 
            sx={{alignItems:"center",justifyContent:'space-between'}}>

                <Grid item xs={6}>

                    <div className='flex items-center space-x-4'>
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAuQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EAEgQAAIBAwEEBwMICAQDCQAAAAECAwAEESEFEjFhEyJBUXGBkRQyoQYzQnKSscHwFSNSU1RigtGT0uHxJEOUFiU0RFVjc6Ky/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDBAAGBf/EACcRAAICAQQBBAEFAAAAAAAAAAABAhEDEiExUUEEEyJxYTIzQlKx/9oADAMBAAIRAxEAPwD7jXV1dXHFWFU3e6iHWq8BpQboKZQ47Vob7uMjQ0VnA0PGgtutxpHMeINhkUuy66iivkHQmqFznLCkcmXjYF1IYAYq66calnD/AEfOqNLuDGM1KTbKb0FDVB3s0FJlOp9KrJcY4Gssk7BpYypPdXHWk/a2Ua49K5b0Zw3HsqTxy5R2hhZlx7ozQXjG4SVGaKtwjHFXbcYFdMUFllBpNB3RnrbtIN4AYoJOGx3U5NKIMIu7rwOaRmBY72R5V9DFkvngagwkUcRmqyure6MUEgjjnPdXYbuqtq7BRNcFDHWpWKRuAq/QOBkg10si4s7SDeIVXoxVZriG3yJZVB7s5NA/SVr+9P2DRWpgcorye+rqjNQTVbMBaqMM1BbkaqWB7aWTGSIZCRxzQjEe0UTJPA1BDntqTHTaBdGP2qnouYNSQ3brVS5XgKjJsbcsYVPZQngHYKhrhh2VQzy91TersdKRV7Ynsqote8UQSTnhjNcTc44A8sUjcux7kBazU0F7DOStEd5wfm6sl0+cdGc1N6lww3LwJ+zzJoV3hQXR9QocHurUk2lBbgm7ZI14dY4pS62ts6MF1WVz/KuB6nFNDW/FhWR+UZjLJndOc0WMEHIUnnWdcfKF7glbK2jOdOkbLAenGgy3tykO9czFVXizsEX0X7q2wx5JLdUc8yRtmURnMm4vI8aXvNr2luVyjvK3uIo1bwHGsRZribRJEtIf23QB28FPDxI8qLHb20ZZ4oZZXf3nYE73iW0NVXpVfyIS9RfA4NuT7pIjihYnRQd9sf3pW4vLq4+caZgf2jug+X+lK7Q2klgq76KrucJFnedz3BV40osN9fZa/dILc+7BF7x+uTp5D41px+nhHdIyT9Q+wM17JLK1vYKk0inDuuscfi3aeQFD9m2x/wCoW/8A0/8ArWitpBGgRE6g4LnT04VHs9v+5T7IrSomKWd2fWK6hhjVs18v3F0fRosQDVDGKhnxQmnI5UPdj0FRYbox2E1G4R20A3eOOKp7eo44oPJAf25jJDDu9KoxYdi0D9JIOOKG+1ol0xlu7tNI1F8B0S6DsSeKjHhVMZ4KB5UjNtj9iFcd7dppKS/uZd4q2B/7S5A89APU+FL7MpDpM2ZNxPf3F8TSj7RtYiQDvY4kaAeJOlYo6RwzYcgjV5G3VPmNW+ApZHQkdE8LHiH3cKPqjXPjjzpl6VeWMl2bU22CATBCAo4yyA7o9cZ+7nSE+0LuYYVuiXHzkp3M+CjGfX1pV5YekVHNzeXKjO7ggL5aKvnrVfZriYZmgjRP3KNujzKgk/AcqZ+njXA8UlwKNIrOWgaW8mBwWjGEU/W7PLXlQ2s2kJkuo1cjULI/UXnjXPmfSmbm7eJ/ZrYRyTLgdDDHncHM5AXz17gaD+jprhc7TuWlGciGPqxjx063npyq2LFQuTIqoB7RPcdSx3XUcZguIx5n3vIedSLa1jYPeXKzzjtkYDH1VGg++nPZIF4x7+OHSEtj1pK82jBat0EKiScjSKPAxzY8FHxrZGPR8/JN+Rlbq2hRmRCEXUsIyoHmcCkV2td7U3k2XbPHGNPapxhT9QfS8eHjSTxQXcyybXvoZguq2iOOiB5jix4cfStUbSgAxH0p/wDjhY/hVNBnWXwAg2c1tI0w6I3DjDzPmRyPE49Ks8bn37iQ8kAX8M/GpkvSR1LW5b+gD7yKWe5uTnctSv15APuzVYxM2WfRZoIfpBpPruW+BqnQ238On2BSV5eTQQtJN7PEg7Wcn4VmfpuX9w/+Af8APT7EVFvdH3PpoxrvEeVQbiM8JD6Uol4RkNHw/mJqfa0ZgAnGvOtnpPafQaSdce+fs0u0wPBs/wBNEdlbU7g5Eih70YPvRj+qk02FOMSjb5GR294NLyDOm9x7AdfhTLtHpmaPxA1P30vI6Hq9O2R2LjTx0wPjVoY0D3GxduSuc6YA971oe45BCpnvBbGORxoPU+FS7wMxKvJKTqd133PM/S8qUaWyzhEFww0AWMiNDz0P4mtMY9B1BQyLqJYFTGpHVX7RPW8hiqTXMEoVI5XumH0lyIh9ka+WaHJNZoQ12462ixrCwUnuAx1vj4VV72S50US2sXf0TGQjkMYX4mn0WDWUkktI5FNyJridvcTomPop+8+tW3ryfIa3lgi/YR1BPiwOnkPOp9r2fs+J5JC8S/TkeN8t4sRrS0u057vq2aTW8TcZ3t2Lt9VcaeJ9KooMR5UvIee7Gzo1QQQR7xwkSOWdzyULr4/GlzHtW/j/AF7x2MZ/5cWWdl/mbIx4D1q9q1naFnjhuWlf35ngdnfxOPhwor7RiA0iuf8AAYfhXaPwD3F5ZSKyNvEI4Z+iTuiiVR4659aVvuhtYmmu7+dIxxcuF9MAZPKkrn5TJNI9vsm3lurhDhyUIjjPM9vgPhSkVujXC3m0Yby7ul90ug3I/qrnA++qwxvyZ8uaPCKCO42zkQpcWtkR89NIxmk8Ac7o8dfCn4NmWNlD0cNvHjtZxvMx7yTqTVztEgYFldeif5qXk2g/8Fc//T/NV1EwzlsMEop6oUY7sVwl7jSDX0h/8lP3a4/vQzeyAE+zSDTtYVZLYyO07NRpMjNYe3tvWuyEAb9ZcN83CnEmsy4+VDXd2Nn7Lid5s4kkTUIO/PDNTY7ISzupLt4JbmduEk8oLDw0pPotx+sWtdkXu2blb3b7kRqcx2ik7q+Neg9jsf3CfYH96C11c5/8MNB+8H9qj2q6/hh9sf2o0kSk5SZ9TWAoR08u5/KOHrTA6gwjgDjquaC9wCowQQw0xrkfjSjqwJFs7I+fcA3lB5jgPLWvNo9JKUpcjzSTaDCPnhqRnwGDmo6ebeI9nZz29G6kg88nA+JrO9v6MMLiPqg4Z4mJj/qfj+FG9qjIVS4uGIysEHujx7McycVWMGToYW/jOQ0c5ycEBG3R4uM58qDNtCyGInuI5X4CEHcRTzzp669wrn6WRCbqQRwqDmOI7oA5t/bFBi2j00Yh2dApg4dM43Yh4D6Xlpzq0YAqi8+68RlvLiPoBxRGwnmeJ+7lSrST3ChbSL2eHgJZEwcfyp+Jx4GijYti0hnnhjmnP/MZAMfVA0H51rOvTaQzm3sjdyXeM9Db3D9X62TuqPH0q8UByaHIrWOFjId55SOtLIcsfPsHIaUi21WumKbKjE5HvXDkiJPP6R5D1FAbY19dR52jtJ3BOfZ91TGOTaAv5+lMGPacSgJLZSKowFMTJ8QT91WSQjyPiqOg2eqyLcXkrXVyODv7qfVXgPv502z86y577aFvG73Gz4ujQZLx3QwPtAYrDk+VE9+mNlWdzHGSVe7aPfCfVUe948PGn0tkvdjHg9BtPa1ts9V9okJkf5uJBvO55D8ax5YNp7Zbev5DZWPEWsTdeT67d3IfGg7PuNkWbtM9wz3bayT3Ksrk+LDQVoJtG2ujiC5hkOPourH76ZRoSeTUFijhs4RFbRhIxwVRiqs7t3gd+tXVIyrGQnI93AoW8DwKjHbmnSItNrfYqzBcZIzr2ml2kB4kYHOiudTjuz71YW3tv2uyo93eLXJXCQjic/cPjT8K2RfydRHNoX8FlC011KscajUluP57q8n+kNpfKOcC0Hs+zQetI2Myju/Pxqtvsq825Mt5t1mCA9S2A0A5/DT1r00YiiBjjMYQDGQuPSnSlL6IylGH5f8Aha2t47fIjiUOQPcwo08KM0hI3xvHsLbw9KW6RdzJCY4YzgmoY4fVIyzHRQ3CqaSKn2FkYgYw4Q6gZ41Xck/cS/ZNB13iojLyk40OSKpuyfu3+1SuJ2o95bTiG5ayPWVhvQhDgYHFS3E7uR5EaHFONKiYjmYscZW2iX8/HSsq7guL23Cxslq8ZDQEe8rDhnuByQQOwnWrWO0YWtlFtbP7Qc78A4ow0Idjz7Tx7M18BY7PTuRqlJ5sB26GPh0UR1I5t2f0+tZrmIMybEQrMCd54WxED/PnRj5E+FFjhe502hIGjPCCPRB9btbzwOVN3E0Fnbl5XjhhQYyeqAOz/aqxjRNszH6eOXf21F7XGpBV4FzGnMxcc8+t5U1NtuwSFZRcpJvnCLH1mc9wA1z93bSntd9fNiwjNtb/AMROvWbmiH729KoNi2aEyRvMLs5JuhIRIx5ngRyxjlWhRT5J6n/EYV9o35/4lmsrRtOiRgZXHNx7vgNedaVvBb2kAhtY0jiBzhR29/M1htdbSstJ4/bYh9OIBZR4qdD5Y8Kn/tHs2K3e4ku40ij+cD9VlPcVOufKm0ia0bTtroaxNqbdgs5vZYAbq+PC2j4jmx4KPzg0jNdbT26d2xJsbA8Z2AMsg/lH0fH7qa2ds+z2ZB0VnHuFtXZzvMx7yTxp1GiTyXwJLsy72hKLjbs/SKNY7KH5qPx/aPjWkwUAKgCgDAXGABV2B4sM+FDZwNN7yNURP7BsgPvKCPHNKXdhs+Yf8RbRvyZKYkmA+jkDXI7vwpKSbI6sjLngCKeMWxJZIxQhLsqwj6tuGhHdFKyfEf3rvZJ0iBivrlBzcP8A/rPrVdo30NhbmW7kjEa6ce3l2k15aW72pt+cRWgNrZcWc6s4z+eQ51SSituTOnOe90g99t2/N0LDZcoupmGspjCheYIAHnjwzTdpZ3lrEDPBa3Eu8XaXO6xPjgmtaBWihRTNvFBuqCNcUU9IZMFElfH0eA9KMcT8sWWVVSRny38ykCSyuMMPoOpB9SD8KGdqx7w3xMGXQK1uxA9AaaLKxIVCH7SG7Pz20OWKIv1ZcLpvNIMY8a0KD7M7nHyhddqWkjlFubZ5Dp1n3SPLsoodXULCm+TxdDkYobxCbMaFGQanf0HjrSb7Mgl0W0jbdyS4jGg7ycaUdM/wL8H2OSMmAiK4PBznOf7CqYX9o+hpI2yIQsMtwumDuzOQT4EnSu9nm/fzf4g/y0rUl4GSh/Y+kKlzc63L9BFw6GJusfF/wHqaUuNzYl9HdRKEsbgrFcqo0ifgkngfdP8ASeyjXW1IopmtrdHubvQ9DFqV+ueCjxoMmzJNpxH9NOrwsMG1iJEYB/a7W89OVfEij0UpDD7VkuWZNkxi4YHDTMcRKfH6R5D1pmzsIzIs+0ZWvLldVZxhY/qrwHjx51k/J+6kt2l2Ldvm5sgOjc6dPAfcccx7p5jnWwX3TkcKdJMnKT8j7vka8KWkYrnPDv7qz9p7cs9mRqbmT9Y/zcKau/gPyKxXh2pt0b20C1js5sH2WJv1kg/nb8BTRiTlMYvflEJLhrPY0Xt9yDuvIvzUX1m7fAUsvyejuJmu9qzPeXTaBs7oiH8oHDxrWtbOGygEVjGkUKj3FH5zRDu5JXqnuqyonuzMztOxP6thfQj6EhCSjwbgfPHjTVptm0un6LfMdwONvONx/IHj5ZossqgkSAgis+/gguYyk8SzJ2ZXhjtHd40yjYjlpNOSVVPEq3ZSs0jjPVDDlxrH6O8th/wV108QzmC6JYjwfj65qv6VhV+jud+ylOgWc4D/AFW4H18qoklySlJvgfZkYndYryPAVh7e+UUGy1ZGInuG4Rjjnsz3eHGhz7ZTat1JYWFzHEyplpyNAB+yO086U2P8nYrab2y4nFxc5JEjjdA8Ae341T5PaBJaVvMz7TZV7tu8F5tqRlQfNwAaefcOXr3V6uGHoQq224Qq5A7F9a7edE3XTCk8d3BPKqMYZM6mJfojiW/PhVseJQ4I5Mrns+CDKSuGj8XPE8vyM0NnjkO6HMcfcRnP96u/TdEpPzPFV/P3mgSPG7h5kxH2KmmfCrJIlbCrLL0TAOOiDAnJ7fDtqk9yXjVTHiMdoHH04mgBEYF2folA0GTryGM/hVMTvESCegj4491fTTNUWwjJJhlcYBij/mOcePCp6PpJOjglO4TgFtN7x/3oUk/SbkXRAAcN0anmTwqZzbKirDkEjrtka+HL765pihWkeDfjTckyMOw62eQPdVN24/hW+x/pQyghjR1lRpG1RN7VfEfhVvbtpfxE32mrqOo+g2lrb2cKRWsSxrnsHE957zRmODr28Kqfd86G+pGe+vOI9K2Y3yojeOKPa9pgXuzsuAx3RLGffjPiNRzApOL5RTbbAXYMTi3Yda8lTqjPYoPE8+XbWftJm2l8qvYr1jLaxuu7CThPdzqBx86a+TIEG1vlBZRDdtYbpWiiHBCyBmx3ZOuKeKpkpO0zR2Xse32dM1xIzXV0/v3Ep3mPhnhW1nA3h7p7D2UuPdfkRiohZsuudM8KtRH7Cs+BvocY48v7Us7h8bvVbszpmokO5I+79HUZ1oN4AjYXQVSMRHkbIefGVk11xnu/vS8hZMsjEg5yAdcc+6iTDetJpG1ZJERSewHOlJRkiQICQpzkZq0UiMpMHfbRtraEy3TiM9mOHgB3/nnXndsW21ttLGnUt7OQ53d7LkDtI/Irz11LJtLb4ivXaVGmK7pOAADwGOHlXutlAL0agDdH0caYGcDHdpwofu3F8DU8dSXIhZbGTZcRbZswSUjrCdd9XI7e8eI05Uy190Lf94QPaHscdaE/19nmBTsowZ2+kvA91AQ/qpnIBIBGozkc+/zq0cdL4bEZZLfy3LiVkWORisqEAoAcqR93pVOkiYO8qnpD7o0wPEfhmsXajHZdxYPYfqOn+cRfcP8AR7o8hWtMi+0SDGQsYYZ78U2LLrbVcCZMemnZ0iuoVt8MTkhc5IHeRxFc1yRIJbtTIT2ZxvDx7BS1szPKgclsnt1pgM1zeuJ2L68SdfWtFESiJFcOWkcRqO3BOO4D/agtHNMd23DMAM7qje3eZxwq+0FCvKqjCo+FHcKBE7JEu6xBYkE51x3U9CckR3TovRqqlWOTJu5J8Dxx51LG2EZMu8ZsZRdN0c2zg+WtPfJ6GO72rJFcIHRVYjPHPjxNZKHpmkMnWI7aC3dDPkLbWstxI3RuOqCx3zgY88VHSx90v/T/AOlBnJjtUCaBhlh2E5xS2+3L0FNugJJ8n//Z" alt="" />
                        <div className='space-y-2 ml-5'>
                            <p  className="font-semibold"> Solar Panel</p>
                            <p className="space-x-5 opacity-50 text-xs font-semibold ">Kilowatt:3 </p>
                            <p>Rs.15000</p>
                        </div>
                    </div>

                </Grid>

                
                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>

                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/>
                        <span>
                            Rate & Review Product
                        </span>

                    </Box>

                </Grid>

            </Grid>)}
            

           </Grid>
        </div>
    )
}

export default OrderDetails;
