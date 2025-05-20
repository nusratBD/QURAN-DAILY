## Aside Action Summary
- যখন কোন সূরাতে(বাটনে) ক্লিক হবে, প্রথমে UI তে থাকা সবগুলো বাটনের active class remove করা হবে। (querySelectorAll দিয়ে then forEach চালিয়ে প্রতিটু বাটনের active class remove করা হবে)।

- সবগুলো বাটনের active class remove করার পর, ক্লিক করা বাটনে(e.target) এ active class add করা হবে।

- onload এ যদি currently reading surah থাকে, তাহলে সে সূরাটি(বাটন) এ active class add হবে, আর বাটনটি UI এর টপে অটো স্ক্রল হবে(scrollIntoView)
