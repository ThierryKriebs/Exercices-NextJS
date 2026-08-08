export default function FemmeLayout({ children }) {
    return (
        <div className="container" style={{ backgroundColor: 'lightgreen' }}>
            <h1>Vêtements</h1>
            { children}
        </div>
    )
}