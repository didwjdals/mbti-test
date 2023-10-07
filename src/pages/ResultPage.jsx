import styles from "../App.module.css"
import { resultData } from "../constants/resultData";
import { useParams, Link } from "react-router-dom";

const ResultPage = () => {
    const { mbti } = useParams();

    const resultMBTIData = resultData.find((data) => data.mbti === mbti);

    const resultDesc = resultMBTIData.desc.split("\n");

    return (<div className={styles.layout} >
        <p className={styles.title_light}>나와 어울리는 고양이는?</p>

        <p className={styles.title_bold}>
            {resultData.match_cat}({mbti})</p>
        <img className={styles.result_img} src={resultMBTIData.image} />
        {resultDesc.map((desc, index) => (
            <p key={index} className={styles.title_light}>
                {desc}
            </p>
        ))}
        <button className={styles.square_button}>카카오톡 공유하기</button>
        <Link to='/' className={styles.square_button}>다시 해보기</Link>
    </div>
    );
};

export default ResultPage;