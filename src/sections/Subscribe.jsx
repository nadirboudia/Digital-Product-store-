import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const onSubmit = (data) => {
     setLoading(true);

     console.log("Sending data:", data);
        emailjs.send(
    "Nadir Boudia",     
    "Temp.nadirboudia",    
    {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    },
    "QIvQ7w9g4Rz0uzWH9"     
    
  )
  .then(() => {
    enqueueSnackbar("✅ Your message has been sent!", { variant: "success" });  
    setLoading(false);
    reset();
     
  })
  .catch((err) => {
    console.error(err);
     enqueueSnackbar("❌ Failed to send your message. Please try again.", { variant: "error" });
     setLoading(false);
  });
   

  };

  return (
  
    <Box
     id="Contact-us"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#fffdfb", px: 2 }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 5,
          height: "600px",
          width: "100%",
          maxWidth: 800,
          borderRadius: 4,
          bgcolor: "white",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
          sx={{ color: "#FF4040" }}
        >
          Contact Us
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            {...register("name", { required: true ,  minLength: 3  })}
            sx={{
              "& .MuiInputLabel-root": {
                color: "#FF4040", 
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black", 
                fontSize: "14px", // نص صغير عند floating
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black", // برتقالي قبل التركيز
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FF4040", // برتقالي عند التركيز
                },
              },
              "& .MuiInputBase-input": {
                color: "black", // نص أسود دائم
                fontSize: "14px",
              },
            }}
          />

          {/* Email Field */}
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            {...register("email", { required: true , pattern: regEmail     })}
            sx={{
              "& .MuiInputLabel-root": {
                color: "#FF4040",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
                fontSize: "14px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FF4040",
                },
              },
              "& .MuiInputBase-input": {
                color: "black",
                fontSize: "14px",
              },
            }}
          />

          {/* Message Field */}
          <TextField
            label="About product"
            multiline
            rows={5}
            fullWidth
            margin="normal"
            {...register("message", { required: true,  minLength: 3  })}
            sx={{
              "& .MuiInputLabel-root": {
                color: "#FF4040",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
                fontSize: "14px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FF4040",
                },
              },
              "& .MuiInputBase-input": {
                color: "black",
                fontSize: "14px",
              },
            }}
          />

          {/* Submit Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
            disabled={loading}

              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                py: 1.5,
                fontSize: "16px",
                fontWeight: "bold",
                width: "200px",
                backgroundColor: "#FF4040",
                "&:hover": { backgroundColor: "#e65100" },
                "&:focus": { outline: "3px solid #ff6f00" },
                "&.Mui-focusVisible": { outline: "3px solid #ff6f00" },
              }}
            >
              {loading ? "Sending ..." : "Send Message"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default ContactForm;
