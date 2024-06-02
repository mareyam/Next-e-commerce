import React, { useState, useEffect } from "react";
import { CLOCK } from "data/Clock";
import { Box, HStack, Text } from "@chakra-ui/react";

const Index = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  let interval;

  const startTimer = () => {
    const countDownDate = new Date("August 1, 2024").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    });
  };

  useEffect(() => {
    startTimer();

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <HStack>
      {CLOCK.map((item) => (
        <Box
          borderRadius="6"
          key={item.id}
          align="center"
          boxSize="12"
          bg="gray.100"
        >
          <Text fontWeight="800">
            {item.name == "Days" ? timerDays : ""}
            {item.name == "Hours" ? timerHours : ""}
            {item.name == "Mins" ? timerMinutes : ""}
            {item.name == "Secs" ? timerSeconds : ""}
          </Text>
          <Text>{item.name}</Text>
        </Box>
      ))}
    </HStack>
  );
};

export default Index;
