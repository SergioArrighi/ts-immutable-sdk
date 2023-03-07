import { Heading, Button } from '@biom3/react';
import { useContext } from 'react';
import { Actions, AppCtx } from '../Context/app-context';
import { imxDisconnect } from 'ts-immutable-sdk';

export const DisconnectButton = () => {
    const { state, dispatch } = useContext(AppCtx);

    const disconnectMetamask = async () => {
        if (state.imxSigner) {
            await imxDisconnect(state.imxSigner);

            dispatch({
               payload: {
                    type: Actions.WalletDisconnected
               },
            });
        }
     }
    
    return(
        <>
            {state.layer1address &&
                <>
                    <Heading size='medium'>Disconnect from MetaMask</Heading>
                    <Button onClick={() => disconnectMetamask()}>
                        Disconnect
                    </Button>
                </>
            }
        </>
    )
}