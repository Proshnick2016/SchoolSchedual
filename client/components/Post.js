import styles from '../styles/appStyles';
import { Text, View, Image } from 'react-native';

export const Post = ({ title, creationAt, imageUrl }) => {
    return (
        <>
            <Image style={styles.paperImage} source={{ uri: imageUrl }}></Image>

            <View style={styles.paperDetails}>
                <Text style={styles.paperTitle}>{title}</Text>
                <Text style={styles.paperData}>{creationAt}</Text>
            </View>
        </>
    )
}