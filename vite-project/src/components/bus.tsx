
import {useEffect, useState} from 'react'
import {Props, Passageiro} from "../data/students"

type Students= {
    e: Props[]
}

type idBoolean= {id: number; checked: boolean;}


export const Bus=({e}: Students )=>{
    const [secret, setSecret] = useState<idBoolean[]>([]);
    const [dados, setDados] = useState<Props[]>(e);

    useEffect(() => {
    setDados(e);
    }, [e]);


    useEffect(() => {
  const storedSecret = localStorage.getItem('toggleState');
  if (storedSecret) {
    setSecret(JSON.parse(storedSecret));
  }
}, []);

    
useEffect(() => {
  if (secret.length > 0) {
    localStorage.setItem('toggleState', JSON.stringify(secret));
  }
}, [secret]);



    function toggleItem(id: number) {
        setSecret(prev =>
            prev.some(item => item.id === id)
                ? prev.map(item =>
                    item.id === id ? { ...item, checked: !item.checked } : item
                  )
                : [...prev, { id, checked: true }]
        );
    }

    function active(id: number) {
  const novosDados = dados.map(item => ({
    ...item,
    passageiro: item.passageiro?.map(p =>
      p.id === id ? { ...p, veio: !p.veio } : p
    )
  }));

  setDados(novosDados);
}
    return (
        <div>
            {dados.map(item => (
                <div key={item.id} style={{ marginBottom: '1rem' }}>
                    <button
                        className='btn btn-dark w-100'
                        onClick={() => toggleItem(item.id)}
                    ><div><h1>{item.linha}</h1> Motorista: {item.motorista} / {item.placa}</div>
                        
                    </button>
                    {/* Exibe os passageiros se o botão estiver "checked" */}
                    {secret.find(s => s.id === item.id && s.checked) && (
                        <div>
                        <table className='w-100'>
                            <thead>
                            <tr className='bg-success border border-secondary text-white'>
                            <th className='p-3'>Nome</th>
                            <th className='p-3'>Veio</th>
                            <th className='p-3'>Sala</th>
                            </tr>
                            </thead>
                            <tbody>
                                {item.passageiro?.map((passageiro: Passageiro, idx: number) => (
                                    <tr key={idx} className='bg-white border-bottom border-dark '>
                                        <td className='p-3 fw-bold'>{passageiro.aluno}</td>
                                        <td>
                                            
                                            <div key={passageiro.id} onClick={() => active(passageiro.id)}>
                                                {passageiro.veio && <button className='btn btn-success'>Active</button>}
                                                {!passageiro.veio && <button className='btn btn-danger'>inactive</button>}
                                            </div>
                                            
                                        </td>
                                        <td className='p-3'>{passageiro.sala}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )}