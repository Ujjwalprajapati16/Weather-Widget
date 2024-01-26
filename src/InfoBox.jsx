import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({info}){
    let cold_url = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Hot_url = "https://images.unsplash.com/photo-1605371893234-db5e7b01aad2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Rain_url = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <h1>Weather Info</h1>
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {info.humidity >80 ? Rain_url : info.temp > 15 ? Hot_url : cold_url}
                    title="Weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{info.city} {info.humidity >80 ? <ThunderstormIcon/> : info.temp > 15 ?<WbSunnyIcon/> : <AcUnitIcon/>}</Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>
                            The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                        </p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
};