import React from "react";

import Card from '../Card';
import Stack from '../Stack';
import Button from '../Button';

function Composer( props ) {
  return (
  <div>
    <section aria-label="Create a post">
      <Card>
        <h3 className="sr-only">Create a post</h3>
        <Stack stretch="last"> 
          <div>
            <Button variant="dark" size="md" rounded suffixClasses="overflow-hidden"> 
              <span className="sr-only">User Profile</span> 
              <img src="https://avatars0.githubusercontent.com/u/39002455?v=4" aria-hidden="true" alt="touha98" className="object-cover w-full h-full top-0 absolute bottom-0 left-0 right-0 hover:opacity-80 transition duration-300 ease-in-out"></img> 
            </Button>
          </div> 
          <div>
            <Button variant="outline_light" justify="left" text="What's on your mind, Chris?" rounded block />
          </div> 
        </Stack> 
        <div className="border-t border-black-400 pt-3 mt-3">
          <Stack>
            <div>
              <Button variant="light" text="Go Live" rounded block />
            </div>
            <div>
              <Button variant="light" text="Photo/Video" rounded block />
            </div>
            <div>
              <Button variant="light" text="Feeling/Activity" rounded block />
            </div>
          </Stack>
        </div>
      </Card>
    </section>   
  </div>
  );
};

export default Composer;