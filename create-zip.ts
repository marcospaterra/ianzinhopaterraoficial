import fs from 'fs';
import path from 'path';
// @ts-ignore
import AdmZip from 'adm-zip';

function zipFolder() {
  const distPath = path.resolve('./dist');
  const zipPath = path.resolve('./Mundo_Azul_Hostinger_DIST.zip');

  if (!fs.existsSync(distPath)) {
    console.error('Erro: A pasta "dist" nao existe. Por favor, execute o build antes.');
    process.exit(1);
  }

  console.log('Compactando a pasta dist...');
  
  try {
    const zip = new AdmZip();
    zip.addLocalFolder(distPath);
    zip.writeZip(zipPath);
    console.log(`Sucesso! Arquivo criado em: ${zipPath}`);
  } catch (error) {
    console.error('Erro ao compactar:', error);
    process.exit(1);
  }
}

zipFolder();
