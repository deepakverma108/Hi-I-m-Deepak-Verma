    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

body {
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
}

header {
  background: linear-gradient(135deg, #007bff, #00c4ff);
  color: white;
  text-align: center;
  padding: 60px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

header h1 {
  font-size: 2.5rem;
}

header p {
  font-size: 1.1rem;
  margin-top: 10px;
}

section {
  padding: 50px 10px;
  max-width: 900px;
  margin: auto;
}

section h2 {
  text-align: center;
  margin-bottom: 25px;
  color: #007bff;
}

#about p {
  text-align: center;
  font-size: 1.1rem;
}

#skills ul {
  display: flex;
  justify-content: center;
}

#skills li {
  background-color: #007bff;
  color: white;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 25px;
  /* transition: 0.3s ease; */
}

#skills li:hover {
  background-color: #0056b3;
}

#projects .project {
  background-color: #00c4ff;
  color: black;
  padding: 20px;
  margin: 15px 0;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: 0.3s ease;
}

#projects .project:hover {
  transform: translateY(-5px);
  color: white;
  background-color: #0056b3;
  box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}

#contact form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#contact input,
#contact textarea {
  width: 80%;
  max-width: 500px;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #007bff;
  border-radius: 10px;
  font-size: 1rem;
}

#contact button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease;
}

#contact button:hover {
  background-color: #0056b3;
}

/* footer {
  text-align: center;
  padding: 15px;
  background-color: #222;
  color: white;
  margin-top: 40px;
} */
  