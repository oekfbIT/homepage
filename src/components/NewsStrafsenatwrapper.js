import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Newswrapper.module.css";
import ApiService from "../network/ApiService";
import NewsItem from "./NewsItem";

const NewsStrafsenatwrapper = ({ className = "" }) => {
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const apiService = new ApiService();
                const response = await apiService.get('news/strafsenat?per=25');

                // Assuming the response itself is the array of news items
                const newsArray = response || [];

                // Sort news items by date, with the newest items first
                const sortedNewsArray = newsArray.sort((a, b) => new Date(b.created) - new Date(a.created));

                setNewsItems(sortedNewsArray);
            } catch (error) {
                console.error("Failed to fetch news items:", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className={[styles.newswrapper, className].join(" ")}>
            <div className={styles.newsNeuheitenParent}>
                <div className={styles.newsNeuheiten}>Entscheidungen Strafsenat</div>
                <div className={styles.allePosts}>Alle Posts</div>
            </div>
            <div className={styles.newsitems}>
                {newsItems.map((item) => (
                    <NewsItem
                        key={item.id}
                        id={item.id}
                        image1={item.image}
                        text={item.text}
                        date={item.created}
                        title={item.title}
                        tag={item.tag}
                    />
                ))}
            </div>
        </div>
    );
};

NewsStrafsenatwrapper.propTypes = {
    className: PropTypes.string,
};

export default NewsStrafsenatwrapper;
