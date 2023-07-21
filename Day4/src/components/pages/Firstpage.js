import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Firstpage() {
  return (
    <Stack direction="row" spacing={20}>
      <Avatar  src="C:\Users\HP\Desktop\ChefFinderApp\1655460088phpenyhsT.jpeg" sx={{ width: 180, height: 180 }}/>
      <Avatar  src="C:\Users\HP\Desktop\ChefFinderApp\event-manager-and-party-objects-vector-8599944.jpg" sx={{ width: 180, height: 180 }} />
    </Stack>
  );
}