// ErrorBoundary.jsx
import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Mettre à jour l'état pour afficher l'UI d'erreur
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez enregistrer l'erreur dans votre système de journalisation ici
    // ou effectuer tout autre traitement de l'erreur souhaité
    // Exemple : envoyer une requête API pour signaler l'erreur

    // Mettre à jour l'état pour afficher l'UI d'erreur
    this.setState({ hasError: true });
  }

  handleReturnClick = () => {
    // Retour à la page précédente avant l'erreur
    window.location.href = document.referrer;
  };



  render() {
    if (this.state.hasError) {
      // Remplacez le contenu suivant par votre propre message d'erreur
      return (
        <div className="error-page">
          <h1>Une erreur s'est produite</h1>
          <p>Nous sommes désolés, une erreur est survenue. Veuillez réessayer ultérieurement.</p>
          <button onClick={this.handleReturnClick}>Retour</button>
          {/* Ajoutez ici votre contenu CSS personnalisé */}
          <style>
            {`
              .error-page {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                font-family: Arial, sans-serif;
              }

              .error-page h1 {
                font-size: 24px;
                margin-bottom: 16px;
              }

              .error-page p {
                font-size: 18px;
                margin-bottom: 24px;
              }

              .error-page button {
                padding: 10px 16px;
                font-size: 16px;
                background-color: #007bff;
                color: #fff;
                border: none;
                border-radius: 4px;
                cursor: pointer;
              }
            `}
          </style>
        </div>
      );
    }

    // Rendu normal de l'application si aucune erreur n'est survenue
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
