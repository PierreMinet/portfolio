<?php
    header('Content-Type: application/json');

    $folder = $_GET['folder'] ?? 'artworks';
    $allowed_folders = ['artworks', 'covers', 'socials'];

    if (!in_array($folder, $allowed_folders)) {
        echo json_encode([]);
        exit;
    }

    $files = glob("$folder/*.{jpg,jpeg,png,webp}", GLOB_BRACE);
    $images = [];

    foreach ($files as $file) {
        $filename = basename($file);

        // Proper alt text

        $clean_name = preg_replace('/[^a-zA-Z0-9]/', ' ', pathinfo($filename, PATHINFO_FILENAME));
        $clean_name = ucfirst(str_replace('_', ' ', $clean_name));

        $images[] = [
            'src' => $file,
            'alt' => $clean_name
        ];
    }

    echo json_encode($images);
?>