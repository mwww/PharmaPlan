import css from './.module.scss'

interface _cardProps {
    imgPath: string;
    title: string;
    desc: string;
}



const _card: React.FC<_cardProps> = ({imgPath, title, desc}: _cardProps) => {
    const style: { [key: string]: React.CSSProperties } = {
        b_i: {
            backgroundImage: `url(${imgPath})`,
        }
    }
    return (
        <div className={css.cont}>
            <div style={style.b_i}></div>
            <div>
                <h5>{title}</h5>
                <div className={css.bot_card}>
                    <p>{desc}</p>
                </div>
                
            </div>
        </div>
    )
}

export default _card