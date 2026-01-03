export default function NewProjectLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <h1>Новый проект</h1>
            {children}
        </main>
    );
}