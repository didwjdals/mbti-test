import styles from "../App.module.css"
import { resultData } from "../constants/resultData";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";


const ResultPage = () => {
    const { mbti } = useParams();

    const resultMBTIData = resultData.find((data) => data.mbti === mbti);

    const resultDesc = resultMBTIData.desc.split("\n");

    useEffect(() => {
        if (!kakao.isInitialized()) {
            kakao.init("b0ad09a885a671c8dadb0efb38b58da5");
        }
    }, []);

    const clickShareHandler = () => {
        Kakao.Share.sendCustom({
            templateId: 978147,
            templateArgs: {
                THU: "https://mbti-test-five.vercel.app" + resultMBTIData.image,
                MATCH_CAT: resultMBTIData.match_cat,
            },
        });
    }

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
        <button onClick={clickShareHandler} className={styles.square_button}>카카오톡 공유하기</button>
        <Link to='/' className={styles.square_button}>다시 해보기</Link>
    </div>
    );
};

export default ResultPage;