import styled from "@emotion/styled";
import NewsLetterText from "./NewsLetterText/NewsLetterText";
import NewsLetterSubscribe from "./NewsLetterSubscribe/NewsLetterSubscribe";
import {useEffect, useState} from "react";
import axios from "axios";

const NewsLetter = () => {
  const [imageData, setImageData] = useState("");
  const accessKey = "RefQeWRu8Evi80g-fkUmTR_JgcD1xq5PQ_hpGVA05Ug";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedImageUrl = localStorage.getItem("randomImageUrl");

        if (cachedImageUrl) {
          setImageData(cachedImageUrl);
        } else {
          const result = await axios.get(
            `https://api.unsplash.com/photos/random?client_id=${accessKey}`
          );

          const randomImageUrl = result.data.urls.full;

          setImageData(randomImageUrl);
          localStorage.setItem("randomImageUrl", randomImageUrl);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <NewsLetterWrapper image={imageData}>
      <NewsLetterText />

      <NewsLetterSubscribe />
    </NewsLetterWrapper>
  );
};

export default NewsLetter;

const NewsLetterWrapper = styled.div<{image: string}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 740px;
  padding: 152px 80px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5) url(${(props) => props.image}) no-repeat center /
    cover;
  background-blend-mode: multiply;
`;
