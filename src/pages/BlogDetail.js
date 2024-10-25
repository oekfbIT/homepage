import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FooterMain from '../components/FooterMain';
import ApiService from '../network/ApiService';
import styles from './BlogDetail.module.css';
import Navigationbar from "../components/Navigationbar";
import { toast } from "react-toastify";

const BlogDetail = () => {
    const { id } = useParams();
    const [newsItem, setNewsItem] = useState(null);
    const apiService = new ApiService();

    useEffect(() => {
        const fetchNewsItem = async () => {
            if (id) {
                try {
                    console.log('Fetching news item with id:', id);
                    const response = await apiService.get(`news/${id}`);

                    // Since the response is a single object, set it directly
                    if (response) {
                        setNewsItem(response);
                        toast.success('News item fetched successfully');
                    } else {
                        throw new Error('No news item found');
                    }
                } catch (error) {
                    console.error('Error fetching news item:', error);
                    toast.error(`Error fetching news item: ${error.message}`);
                }
            }
        };
        fetchNewsItem();
    }, [id]);

    if (!newsItem) return <div>Loading...</div>;

    return (
        <div className={styles.blogDetail}>
            <Navigationbar />
            <div className={styles.content}>
                <img
                    src={newsItem.image}
                    alt="Blog Image"
                    className={styles.blogImage}
                />
                <div className={styles.blogText}>
                    <h4>{new Date(newsItem.created).toLocaleDateString()}</h4>
                    {newsItem.text.split('\n').map((line, index) => (
                        line.trim() !== '' && <p key={index}>{line}</p>
                    ))}
                </div>
            </div>
            <FooterMain />
        </div>
    );
};

export default BlogDetail;
