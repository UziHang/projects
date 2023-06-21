

export default function Loading() {
    const loaderStyle = {
        fontSize: '48px',
        display: 'inline-block',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 'bold',
        color: '#FFF',
        letterSpacing: '2px',
        position: 'relative',
        boxSizing: 'border-box'
      };
    
      const loaderAfterStyle = {
        content: 'Loading',
        position: 'absolute',
        left: 0,
        top: 0,
        color: '#263238',
        textShadow: '0 0 2px #FFF, 0 0 1px #FFF, 0 0 1px #FFF',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
        animation: 'animloader 6s linear infinite'
      };
  

     return ( 
        <div style={loaderStyle}>
        <div style={loaderAfterStyle}>loading</div>
      </div>
        )
    
}