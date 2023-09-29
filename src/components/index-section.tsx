import { useNavState } from "./navigation"

type SectionInput = {
    background: string
    title: string
    text: string
    float: 'right' | 'left'
}

export const IndexSection = (input: SectionInput) => {
    const navState = useNavState();

    return (
        <div style={{minHeight: "80%"}}>
            <img src="images/BlindHawk2.png" style={{width:"45%",height:"auto"}}></img>
            <div style={{width:"55%", float: input.float}}>
                <p className="heading" style={navState} id="heading">Blind Hawk</p>
                <div className="center"  style={{width:"75%"}}><p className="text" id="text"> 
                In this website I will be showing you some of my drawings and also my list of favorite anime/manga that I would like to recommend top you all!
                </p></div>
            </div>
        </div>
    )
}