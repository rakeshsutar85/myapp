import React from 'react';

const Achievement = () => {
    return (
        <div>

            <div style={styles.heading}>
                ACHIVEMENTS
            </div>
            <div>
                Our KPI'S Achived Till Now
            </div>


            <div style={styles.achievementContainer}>
                <div style={styles.achievementItem}>
                    <h2 style={styles.achievementNumber}>500+</h2>
                    <p style={styles.achievementText}>Happy Clients</p>
                </div>
                <div style={styles.achievementItem}>
                    <h2 style={styles.achievementNumber}>200+</h2>
                    <p style={styles.achievementText}>Projects Completed</p>
                </div>
                <div style={styles.achievementItem}>
                    <h2 style={styles.achievementNumber}>99%</h2>
                    <p style={styles.achievementText}>Customer Satisfaction</p>
                </div>
                <div style={styles.achievementItem}>
                    <h2 style={styles.achievementNumber}>10+</h2>
                    <p style={styles.achievementText}>Years of Experience</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    heading: {
        backgroundColor: '#007BFF', // Blue background
        color: 'white', // White text
        padding: '0.5rem 1rem', // Padding for spacing
        borderRadius: '25px', // Rounded corners
        textAlign: 'center', // Center the text
        display: 'inline-block', // Fit content width
        margin: '1rem auto', // Center the div horizontally
        fontSize: '1.2rem', // Font size
        fontWeight: 'bold', // Bold text
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    },
    achievementContainer: {

        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        padding: '2rem',
        margin: '2rem 0',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

    },
    achievementItem: {
        textAlign: 'center',
    },
    achievementNumber: {
        fontSize: '2.5rem',
        color: '#007BFF',
        margin: '0 0 0.5rem 0',
    },
    achievementText: {
        fontSize: '1.2rem',
        color: '#333',
        margin: '0',
    },
};

export default Achievement;