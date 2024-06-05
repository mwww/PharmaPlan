import css from './.module.scss'

interface _cardProps {
    imgPath: string;
    title: string;
    price: number;
}


const _card: React.FC<_cardProps> = ({imgPath, title, price}: _cardProps) => {
    const style: { [key: string]: React.CSSProperties } = {
        b_i: {
            // borderRadius: `${borderRadius}px`,
            backgroundImage: `url(${imgPath})`,
            // backgroundImage: imgPath,
        }
    }

    return (
        <div className={css.cont}>
            <div style={style.b_i}> {/* bg image here */} </div>
            <div>
                <h5>{title}</h5>
                <p>{`Rp. ${price.toLocaleString()}`}</p>
            </div>
        </div>
    )
}

export default _card