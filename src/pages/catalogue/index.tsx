import setTitle from "../../helper/title/title"

import css from './.module.scss'

import _card from "./card/card"

import obats from "./obats.json"

export default function Catalogue() {
    setTitle("Medicine")
    console.log(obats.length);
    
    return (
        <div className={css.cont}>
            <div>
                <h5>Categories</h5>
                <ul>
                    <li><a href="#antacids">Antacids</a></li>
                    <li><a href="#antacids">Antidepresants</a></li>
                    <li><a href="#antacids">Antibiotics</a></li>
                    <li><a href="#antacids">Decongestants</a></li>
                    <li><a href="#antacids">Hormones</a></li>
                    <li><a href="#antacids">Laxatives</a></li>
                    <li><a href="#antacids">Vitamins</a></li>
                </ul>
            </div>
            <div>
                {
                    obats.map(obat => (
                        <_card imgPath={obat.img} title={obat.title} price={obat.price}/>
                    ))
                }
                {/* <_card imgPath="/assets/Gaviscon.png" title="sjdfonedsijfhuis" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/> */}
            </div>
        </div>
    )
}