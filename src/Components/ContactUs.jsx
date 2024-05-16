import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

const ContactUs = () => {
  return (
    <section className="px-8 py-8 lg:py-16 bg-black text-white">
      <div className="container mx-auto text-center">
        <Typography
          variant="h5"
          color="white"
          className="mb-4 !text-base lg:!text-2xl"
        >
          Customer Care
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          We're Here to Help
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-400">
          Whether it's a question about our services, a request for technical assistance, or suggestions for improvement, our team is eager to hear from you.
        </Typography>
        <form
          action="#"
          className="flex flex-col gap-4 lg:max-w-sm mx-auto"
        >
          <Typography
            variant="small"
            className="text-left !font-semibold !text-gray-300"
          >
            Select Options for Business Engagement
          </Typography>
          <div className="flex gap-4 justify-center">
            <Button variant="outlined" className="max-w-fit !border-gray-500 !text-gray-300">
              General Inquiry
            </Button>
            <Button variant="outlined" className="max-w-fit !border-gray-500 !text-gray-300">
              Product Support
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-300"
              >
                First Name
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="First Name"
                name="first-name"
                className="focus:border-t-gray-500"
                containerProps={{
                  className: "min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-300"
              >
                Last Name
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="Last Name"
                name="last-name"
                className="focus:border-t-gray-500"
                containerProps={{
                  className: "min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
          </div>
          <div>
            <Typography
              variant="small"
              className="mb-2 text-left font-medium !text-gray-300"
            >
              Your Email
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="name@email.com"
              name="email"
              className="focus:border-t-gray-500"
              containerProps={{
                className: "min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              className="mb-2 text-left font-medium !text-gray-300"
            >
              Your Message
            </Typography>
            <Textarea
              rows={6}
              color="gray"
              placeholder="Message"
              name="message"
              className="focus:border-t-gray-500"
              containerProps={{
                className: "min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <Button className="w-full !bg-[#00df9a] !text-black">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
