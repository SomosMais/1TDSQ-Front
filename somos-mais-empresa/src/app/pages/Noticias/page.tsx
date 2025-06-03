'use client';
import Hotbar from '@/app/component/Hotbar/Hotbat';
import NoticiaCard from '@/app/component/NoticiaCard/NoticiaCard';
import NoticiaModal from '@/app/component/NoticiaCard/NoticiaModal';
import React, { useState } from 'react';
;

interface Noticia {
  id: number;
  titulo: string;
  resumo: string;
  conteudo: string;
}

const Noticias = () => {
  const [noticiaSelecionada, setNoticiaSelecionada] = useState<Noticia | null>(null);

  const noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Enchentes afetam região sul',
      resumo: 'Fortes chuvas causaram enchentes em várias cidades do sul do país.',
      conteudo: 'Detalhes completos sobre as enchentes, os danos causados e ações do governo local...',
    },
    {
      id: 2,
      titulo: 'Campanha de doação arrecada toneladas de alimentos',
      resumo: 'Iniciativa solidária mobiliza milhares de pessoas.',
      conteudo: 'A campanha teve início na última semana e já arrecadou mais de 10 toneladas de alimentos...',
    },
    // Adicione mais notícias conforme necessário
  ];

  return (
    <>
    <div className="flex flex-col items-center gap-6 p-6 h-[740px]">
      <h1 className="text-3xl font-bold mb-4">Notícias</h1>
      {noticias.map(noticia => (
        <NoticiaCard
          key={noticia.id}
          titulo={noticia.titulo}
          resumo={noticia.resumo}
          onClick={() => setNoticiaSelecionada(noticia)}
        />
      ))}

      {noticiaSelecionada && (
        <NoticiaModal
          titulo={noticiaSelecionada.titulo}
          conteudo={noticiaSelecionada.conteudo}
          onClose={() => setNoticiaSelecionada(null)}
        />
      )}
    </div>
    <Hotbar/>
    </>
  );
};

export default Noticias;
