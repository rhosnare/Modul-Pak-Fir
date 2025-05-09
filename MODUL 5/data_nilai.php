<!DOCTYPE html>
<html>
<head>
    <title>Daftar Nilai</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <form method="post">
            <h2>Daftar Nilai</h2>
            <input type="text" name="nama" placeholder="Nama" required>
            <input type="number" name="nilai" placeholder="Nilai" required>
            <input type="submit" value="Submit">
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $nama = $_POST['nama'];
            $nilai = $_POST['nilai'];

            if ($nilai > 80) {
                $grade = "A";
            } elseif ($nilai >= 70 && $nilai <= 79) {
                $grade = "B";
            } elseif ($nilai >= 60 && $nilai <= 69) {
                $grade = "C";
            } elseif ($nilai >= 50 && $nilai <= 59) {
                $grade = "D";
            } else {
                $grade = "Tidak Lulus";
            }

            echo "<div class='hasil'>";
            echo "<h2>Hasil:</h2>";
            echo "<p>Nama: $nama</p>";
            echo "<p>Nilai: $nilai</p>";
            echo "<p>Grade: $grade</p>";
            echo "</div>";
        }
        ?>
    </div>
</body>
</html>
