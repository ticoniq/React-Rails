import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetings/greetingsSlice';

export default function Greeting() {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings.value);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div class="jumbotron">
      <h1 class="display-4">{greetings}</h1>
    </div>
  )
}
