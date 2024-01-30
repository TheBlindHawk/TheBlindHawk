import { Stack, Image, Link } from "@chakra-ui/react"

export const HomePage = () => {
    
    return (
        <>
            <section className="content full-section">
                <p className="title red">Welcome to The Blind Hawk's nest</p>
                <Stack direction='row'>
                    <Image boxSize='32%' objectFit='cover' src='images/LoneWolf.png'/>
                    <Image boxSize='32%' objectFit='cover' src='images/BlindHawk.png'/>
                    <Image boxSize='32%' objectFit='cover' src='images/LittleLion.png'/>
                </Stack>
                <p className="text">© 2020-2022 TheBlindHawk, All rights reserved</p>littlelionspaw
            </section>

            <section className="unscrollable shrine full-section">
                <div className="transparent">
                    <p className="t-right">Check out my Gallery!</p>
                    <Link className="link green-link" style={{top: "50%", left:"80%"}} href="/gallery">
                        <span>Gallery</span>
                    </Link>
                </div>
            </section>

            <section className="unscrollable shrine full-section">
                <div className="transparent">
                    <p className="t-right">Check out my Gallery!</p>
                    <Link className="link green-link" style={{top: "50%", left:"80%"}} href="/gallery">
                        <span>Gallery</span>
                    </Link>
                </div>
            </section>
        </>
    )
}