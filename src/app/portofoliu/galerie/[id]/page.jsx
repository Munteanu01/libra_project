// gallery/[id]/page.jsx
'use client'

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { images } from "../../images"; // Correct import of images

export default function GalleryPage() {
  const { id } = useParams(); // Get dynamic project ID
  const projectImages = images[id]; // Get images for the specific project ID

  if (!projectImages) {
    return (
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl font-bold mb-6">Proiectul nu a fost gasit</h1>
        <Link href="/portofoliu">
          <span className="text-blue-500 hover:underline">&larr; Inapoi la Proiecte</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 mt-64 text-white">
      <Link href="/portofoliu" className="text-blue-500 hover:underline mb-8 inline-block">
        &larr; Inapoi la Proiecte
      </Link>
      <h1 className="text-4xl font-bold mb-6">{id.replace("-", " ")}</h1>
      <div className="grid grid-cols-3 gap-4">
        {projectImages.map((img, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <div
              className={`w-full h-full ${img.color}`}
              style={{ width: img.width, height: img.height }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
