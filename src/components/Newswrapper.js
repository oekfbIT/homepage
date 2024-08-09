import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Newswrapper.module.css";
import ApiService from "../network/ApiService";
import NewsItem from "./NewsItem";

const Newswrapper = ({ className = "" }) => {
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const apiService = new ApiService();
                const response = await apiService.get('news');

                // Extract the 'items' array from the response
                const newsArray = response.items || [];

                setNewsItems(newsArray);
            } catch (error) {
                console.error("Failed to fetch news items:", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className={[styles.newswrapper, className].join(" ")}>
            <div className={styles.newsNeuheitenParent}>
                <div className={styles.newsNeuheiten}>{`News & Neuheiten`}</div>
                <div className={styles.allePosts}>Alle Posts</div>
            </div>
            <div className={styles.newsitems}>
                {newsItems.map((item) => (
                    <NewsItem
                        key={item.id}
                        image1={item.image}
                        text={item.text}
                        date={item.created}
                    />
                ))}
            </div>
        </div>
    );
};

Newswrapper.propTypes = {
    className: PropTypes.string,
};

export default Newswrapper;
