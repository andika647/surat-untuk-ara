document.addEventListener("DOMContentLoaded", () => {

    const opening =
        document.getElementById("opening");

    const letterScreen =
        document.getElementById("letterScreen");

    const memoryScreen =
        document.getElementById("memoryScreen");

    const ending =
        document.getElementById("ending");


    const openButton =
        document.getElementById("openButton");

    const nextButton =
        document.getElementById("nextButton");

    const memoryButton =
        document.getElementById("memoryButton");

    const finalButton =
        document.getElementById("finalButton");


    const letterText =
        document.getElementById("letterText");

    const scrollHint =
        document.getElementById("scrollHint");

    const finalText =
        document.getElementById("finalText");


    /* =========================
       MUSIC
    ========================= */

    const bgm =
        document.getElementById("bgm");

    bgm.volume = 0.18;


    function startMusic() {

        if (!bgm) return;

        bgm.play()
            .catch(() => {
                /*
                 Browser bisa menolak autoplay.
                 Tapi karena fungsi ini dipanggil
                 setelah tombol Buka Surat ditekan,
                 biasanya audio akan langsung berjalan.
                */
            });

    }


    /* =========================
       SURAT
    ========================= */

    const letter = `Untuk Ara ❤️

Terima kasih karena sudah memilih Andika, seseorang yang mungkin masih sangat sederhana dan jauh dari kata sempurna.

Maaf ya, Ara, kalau selama ini Andika belum bisa menjadi seseorang yang terbaik buat kamu. 🥺

Andika mungkin nggak bisa seganteng cowok-cowok di luar sana.

Andika juga belum punya banyak prestasi ataupun harta yang bisa dibanggakan.

Tapi satu hal yang Andika punya adalah niat untuk terus berusaha menjadi lebih baik, terutama untuk orang yang Andika sayang.

Kita juga harus menjalani hubungan ini dengan jarak yang cukup jauh.

LDR memang nggak selalu mudah.

Kita nggak bisa bertemu kapan saja, nggak bisa selalu menemani satu sama lain secara langsung, dan terkadang mungkin cuma bisa saling melihat dari layar HP. 📱❤️

Andika tahu, mungkin ada saatnya Ara merasa kesepian.

Mungkin Ara juga pernah merasa iri ketika melihat teman-teman Ara bisa bertemu dengan cowok mereka, pergi bersama, ngobrol langsung, atau sekadar ditemani ketika sedang membutuhkan seseorang.

Sedangkan Ara dan Andika harus bersabar karena jarak.

Andika nggak akan menyalahkan Ara kalau suatu saat Ara merasa capek dengan keadaan ini.

Karena Andika juga sadar, LDR bukan sesuatu yang selalu mudah untuk dijalani.

Walaupun Ara sering bilang cinta lewat chat dan selalu membuat Andika merasa disayangi, Andika tahu mungkin jauh di dalam hati Ara, Ara juga pasti ingin bertemu.

Pasti ingin ngobrol langsung.

Pasti ingin menghabiskan waktu bersama.

Dan mungkin Ara juga ingin merasakan bagaimana rasanya ketika Andika nggak lagi cuma ada di balik layar HP. 🥹

Andika juga ingin hal yang sama.

Andika ingin suatu hari nanti bisa bertemu Ara secara langsung, duduk bersama, ngobrol tanpa harus menunggu balasan chat, dan membuat kenangan yang selama ini cuma bisa kita bayangkan. 🌙❤️

Jadi, sabar ya, Ara.

Tunggu Andika di sana. 🥺❤️

Andika memang belum punya banyak hal untuk dibanggakan sekarang.

Tapi Andika sedang berusaha.

Berusaha menjadi lebih baik.

Berusaha punya masa depan.

Berusaha supaya suatu hari nanti Andika bisa datang kepada Ara bukan cuma dengan kata-kata, tapi dengan sesuatu yang benar-benar bisa membuat Ara bangga.

Andika nggak bisa menjanjikan kalau perjalanan kita akan selalu mudah.

Tapi Andika bisa berjanji untuk terus berusaha selama kita masih sama-sama mau memperjuangkan hubungan ini.

Karena bagi Andika, Ara bukan cuma seseorang yang hadir di dalam chat.

Ara adalah seseorang yang Andika tunggu untuk bisa ditemui suatu hari nanti.

Dan ketika hari itu akhirnya datang...

Semoga semua rasa rindu, semua jarak, dan semua kesabaran yang kita jalani selama ini berubah menjadi sebuah cerita indah yang bisa kita ingat bersama. ❤️

Sabar ya, Ara.

Tunggu Andika.

Suatu hari nanti, Andika ingin mengatakan semua ini bukan lewat layar HP...

Tapi langsung di depan Ara. ❤️🌙

— Andika, untuk Ara.`;


    /* =========================
       SCREEN
    ========================= */

    function showScreen(screen) {

        document
            .querySelectorAll(".screen")
            .forEach(item => {
                item.classList.remove("active");
            });

        screen.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =========================
       TYPEWRITER
    ========================= */

    function typeLetter() {

        letterText.textContent = "";

        let index = 0;

        const speed = 12;


        function type() {

            if (index < letter.length) {

                letterText.textContent +=
                    letter.charAt(index);

                index++;

                setTimeout(type, speed);

            }

        }

        type();

    }


    /* =========================
       BUKA SURAT
    ========================= */

    openButton.addEventListener("click", () => {

        /*
         * Musik dimulai dari interaksi
         * pengguna supaya browser tidak
         * memblokir autoplay.
         */
        startMusic();

        showScreen(letterScreen);

        setTimeout(() => {
            typeLetter();
        }, 400);

    });


    /* =========================
       SCROLL HINT
    ========================= */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 100) {

            scrollHint.classList.add("hidden");

        }

    });


    /* =========================
       LANJUT
    ========================= */

    nextButton.addEventListener("click", () => {

        showScreen(memoryScreen);

    });


    /* =========================
       MEMORY
    ========================= */

    memoryButton.addEventListener("click", () => {

        showScreen(ending);

    });


    /* =========================
       FINAL
    ========================= */

    finalButton.addEventListener("click", () => {

        finalText.textContent =
            "Andika akan terus berusaha. Sampai hari itu tiba. ❤️";

        createHearts();

    });


    /* =========================
       HEART ANIMATION
    ========================= */

    function createHearts() {

        for (let i = 0; i < 15; i++) {

            const heart =
                document.createElement("div");

            heart.textContent = "❤️";

            heart.style.position = "fixed";
            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.bottom = "-30px";

            heart.style.fontSize =
                (15 + Math.random() * 20) + "px";

            heart.style.zIndex = "9999";

            heart.style.pointerEvents = "none";


            document.body.appendChild(heart);


            const duration =
                2500 + Math.random() * 2500;


            heart.animate(
                [
                    {
                        transform:
                            "translateY(0) scale(1)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(-${window.innerHeight + 100}px) scale(${0.5 + Math.random()})`,
                        opacity: 0
                    }
                ],
                {
                    duration: duration,
                    easing: "ease-out"
                }
            );


            setTimeout(() => {

                heart.remove();

            }, duration);

        }

    }

});