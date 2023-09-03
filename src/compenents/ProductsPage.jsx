import { Alert, Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Button} from '@mui/material'
import { useBeforeUnload, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Reducer/Product/CartReducer';

const ProductsPage = ({ product }) => {
    const { id, admin, title, image, description, price } = product;
    const email = localStorage.getItem("email");
    const dispatch = useDispatch();
    const userIsLogin = localStorage.getItem("userIsLogin");
    const navigate = useNavigate();
    const trimmedDescription = description.length > 35 ? `${description.slice(0, 33)}...` : description;
    const addBasket = () => {
        userIsLogin === "true" ? (
            dispatch(addToCart({email,id})),
            alert("sepete eklendi")
        )
             : alert("sepete eklemek için lütfen giriş yapın")    
    }
    const sendDetailPage = () => {
     navigate(`/product/${id}`)
}
    return (
      <div id='products'>
        
 <Card id='product-card'>
                <CardHeader
                    avatar={<Avatar>{admin.username.charAt(0)}</Avatar>}
                    title={admin.username}
                />
          <Button onClick={sendDetailPage}>
          {image && image.includes('image') ?
           
                    <CardMedia
                        component="img"
                        height={220}
                        image={image}
                        alt=""
                        sx={{
                            objectFit: 'contain',
                        }}
                    /> : image && image.includes('video') ?
                        <video height={217} width='100%' controls>
                            <source src={image} type="video/mp4" />
                        </video> : null
                }  
</Button>
          
                <CardContent>
                    <Typography variant='h5'>{title}</Typography>
            <br />
            <Typography variant='h6'>
{trimmedDescription}
            </Typography>
            
                    <br />
                    <Typography id='price' variant='body1'>{price} TL</Typography>
                </CardContent>
                <CardActions id='action'>
                    <div className='product-action'>
                        <IconButton>
                            <FavoriteIcon color='warning'></FavoriteIcon>
                        </IconButton>
                        <Typography>Beğen</Typography>
                    </div>
                    <div className='product-action'>
                        <IconButton>
                            <CommentIcon></CommentIcon>
                        </IconButton>
                        <Typography>Yorumlar</Typography>
                    </div>
                    <div className='product-action'>
                        <IconButton onClick={addBasket}>
                            <AddShoppingCartIcon></AddShoppingCartIcon>
                        </IconButton>
                        <Typography>Sepete Ekle</Typography>
                    </div>
                </CardActions>
            </Card>
        
           
        </div>
    )
}

export default ProductsPage;