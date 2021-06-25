//useEffect registra, salva quando uma mudança no componente ocorrer
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

type User = {
  id: string,
  name: string,
  avatar: string
}

type AuthContextTupe = { 
  user: User | undefined,
  signInWithGoogle: () => Promise<void>,
}

type AuthContextProviderProps = {
    children: ReactNode;
}

//Ao usar o createContext, é necessário iniciar o contexto
//e passar o formato desse contexto, podendo ser string '' ou
// como neste caso, um objeto '{}'
export const AuthContext = createContext({} as AuthContextTupe);

export function AuthContextProvider(props: AuthContextProviderProps) {

      //value é o valor padrão
  //setValue permite modificar o valor padrão
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged(user => {
      if(user){
        const {displayName, photoURL, uid} = user;
      
        if(!displayName || !photoURL){
          throw new Error('Missing information from Google Account');
        }
        
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  async function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
    
    if(result.user){
      const {displayName, photoURL, uid} = result.user;
      
      if(!displayName || !photoURL){
        throw new Error('Missing information from Google Account');
      }
      
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
    
    auth.signInWithPopup(provider).then(result => {
        if(result.user){
          const {displayName, photoURL, uid} = result.user;
          
          if(!displayName || !photoURL){
            throw new Error('Missing information from Google Account');
          }
          
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
        }
    });
  }

    return (
      <AuthContext.Provider value={{ user, signInWithGoogle}}>
          {props.children}
      </AuthContext.Provider>
    );
}