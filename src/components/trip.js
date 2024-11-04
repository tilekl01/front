import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/trip/'); // URL вашего API
                setTrips(response.data);
            } catch (error) {
                console.error('Error fetching trips:', error);
            }
        };
        fetchTrips();
    }, []);

    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p></p>
            <div className="tripcard">
                {trips.map((trip) => (
                    <TripData
                        key={trip.slug} // Используем slug как уникальный ключ
                        imgs={trip.image_url} // URL изображения
                        heading={trip.name} // Название поездки
                        text={trip.description} // Описание поездки
                        link={`/${trip.slug}`} // Преобразование slug в URL
                    />
                ))}
            </div>
        </div>
    );
}

export default Trip;
